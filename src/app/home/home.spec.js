fdescribe('home', () => {
    let server, app;
    const {expectElement, type} = testRunner.actions;

    beforeEach(() => {
        app = testRunner.app(['home']);
        console.log(app);
        server = testRunner.http();
    });

    afterEach(() => {
        server.stop();
    });

   

    


    it('initially we have 1000 characters', () => {
        const html = app.runHtml('<home></home>');

        html.verify(
            expectElement('.home-header__counter').toHaveText('1000')
        );

    });


});