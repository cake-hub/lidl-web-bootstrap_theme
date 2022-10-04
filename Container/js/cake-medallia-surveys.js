// Documentation on how to check if form is loaded: https://docs.medallia.com/en/medallia-digital/medallia-digital-web/administration-guide/targeting-surveys/code-based-triggers/using-javascript-to-target-surveys
window.addEventListener ("DOMContentLoaded", () => {
    const eventNameOnLoaded = "cake-medallia.OnSurveyLoaded";
    const eventNameOnSubmitted = "cake-medallia.OnSurveySubmitted";
    window.addEventListener('neb_OnsiteLoaded', (...data) => {
        // Throw custom event when survey has been loaded
        const eventOnLoaded = new CustomEvent (eventNameOnLoaded, {});
        document.dispatchEvent (eventOnLoaded);

        const isSurveySubmittedMethod = () => {
            // key name for this item is reverse engeneered
            const isSurveySubmitted = localStorage.getItem ("md_isSurveySubmittedInSession");
            if (!isSurveySubmitted) {
                setTimeout (isSurveySubmittedMethod, 200);
                return;
            }
            // Throw custom event when survey has been submitted
            const eventOnSubmitted = new CustomEvent (eventNameOnSubmitted, {});
            document.dispatchEvent (eventOnSubmitted);
        };
        setTimeout (isSurveySubmittedMethod, 200);
    });
});


