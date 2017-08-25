import HomeModule from './home.controller';

fdescribe('home', () => {
    let server, app;
    const {expectElement, type} = testRunner.actions;

    beforeEach(() => {
        app = testRunner.app([HomeModule.name]);
        console.log(app);
        server = testRunner.http();
    });

    afterEach(() => {
        server.stop();
    });


    it('initially we have 1000 characters', () => {
        const html = app.runHtml('<home-component></home-component>');

        html.verify(
            expectElement('.test-subject').toHaveText('Hello World')
        );

    });


});