describe('BMI Converter', () => {
    beforeAll(async () => {
        await page.goto('http://localhost:3000');
    });

    beforeEach(async () => {
        await page.reload();
    });

    it('should display "BMI Converter" text on page', async () => {
        await expect(page).toMatch('BMI Converter');
    });

    describe('Metric method', async () => {
        beforeEach( async () => {
            await page.type('input[name="weight"]', '95')
            await page.type('input[name="height"]', '186')
            await page.click('button[name="method"]', 'metric')
            await page.click('button[name="calculate"]')
        })

        it('displays assesment', async () => {   
            await expect(page).toMatch('overweight')
        })

        it('displays BMI value', async () => {   
            await expect(page).toMatch('BMI of 27.46')
        })
    })

    describe('Imperial method', async () => {
        beforeEach( async () => {
            await page.type('input[name="weight"]', '200')
            await page.type('input[name="height"]', '73')
            await page.click('button[name="method"]', 'imperial')
            await page.click('button[name="calculate"]')
        })

        it('displays assesment', async () => {   
            await expect(page).toMatch('overweight')
        })

        it('displays BMI value', async () => {   
            await expect(page).toMatch('BMI of 26.38')
        })
    })
}); 