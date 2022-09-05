let fixOneTrustButtonsIntervalId = setInterval(() => {
    const onetrustConsentSdk = document.querySelector('#onetrust-consent-sdk');
    if(onetrustConsentSdk) {
        const onetrustPcBtnHandler = onetrustConsentSdk.querySelector('#onetrust-pc-btn-handler');
        const onetrustAcceptBtnHandler = onetrustConsentSdk.querySelector('#onetrust-accept-btn-handler');
        onetrustAcceptBtnHandler.before(onetrustPcBtnHandler);
        const acceptRecommendedBtnHandler = onetrustConsentSdk.querySelector('#accept-recommended-btn-handler');
        const savePreferenceBtnHandler = onetrustConsentSdk.querySelector('#onetrust-pc-sdk button.save-preference-btn-handler');
        savePreferenceBtnHandler.after(acceptRecommendedBtnHandler);
        clearInterval(fixOneTrustButtonsIntervalId);
    }
}, 17);
