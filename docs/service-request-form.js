// Register ESCRM.ServiceRequestForm.onLoad on the form OnLoad event.
// Add execution context as the first parameter.
// This provides friendly UI validation only; plug-ins must enforce server-side rules.
var ESCRM = window.ESCRM || {};

ESCRM.ServiceRequestForm = (function () {
    "use strict";

    function validateSubject(executionContext) {
        var formContext = executionContext.getFormContext();
        var subjectAttribute = formContext.getAttribute("escrm_subject");
        var subjectControl = formContext.getControl("escrm_subject");

        if (!subjectAttribute || !subjectControl) {
            return;
        }

        var subject = subjectAttribute.getValue();
        var messageId = "escrm_subject_validation";

        if (!subject || !subject.trim()) {
            subjectControl.setNotification(
                "Enter a subject before saving the Service Request.",
                messageId
            );
            formContext.ui.setFormNotification(
                "Subject is required.",
                "ERROR",
                messageId
            );
            return;
        }

        if (subject.trim().length > 200) {
            subjectControl.setNotification(
                "Subject must be 200 characters or fewer.",
                messageId
            );
            formContext.ui.setFormNotification(
                "Please shorten the subject.",
                "ERROR",
                messageId
            );
            return;
        }

        subjectControl.clearNotification(messageId);
        formContext.ui.clearFormNotification(messageId);
    }

    function onLoad(executionContext) {
        var formContext = executionContext.getFormContext();
        var subjectAttribute = formContext.getAttribute("escrm_subject");

        if (subjectAttribute) {
            subjectAttribute.addOnChange(validateSubject);
        }

        validateSubject(executionContext);
    }

    return {
        onLoad: onLoad,
        validateSubject: validateSubject
    };
})();
