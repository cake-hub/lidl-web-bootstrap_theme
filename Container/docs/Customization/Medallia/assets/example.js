window.addEventListener ("load", () => {
    document.addEventListener ("cake-medallia.OnSurveyLoaded", () => {
        console.log ("Medallia from was successfully loaded!");
    });
    document.addEventListener ("cake-medallia.OnSurveySubmitted", () => {
        console.log ("Medallia form was successfully submitted!");
        // wait 4 seconds before removing survey
        setTimeout (() => {
        const surveyElement = document.getElementById ("cake_medallia_embedded_survey_wrapper");
        surveyElement.style.display = "none";
        }, 1000 * 4);
    });
});
