'use strict';
const chai = require('chai');
const { expect } = chai;

const mockFunction = require('./index');

describe('random numbers', () => {
    it('generates the right number range', async () => {
        const data = [];
        for (let i = 0; i < 1000; i++) {
            let number = mockFunction.randomIntegerGenerator(10);
            data.push(number);
        }

        data.forEach((number) => {
            expect(number).within(0, 9);
        });
    });
});

describe('random data generator', () => {
    let data;

    before(async () => {
        data = mockFunction.generateRandomData();
    });

    it('generates the correct properties', async () => {
        expect(data).have.property('id');
        expect(data).have.property('platform');
        expect(data).have.property('provider');
        expect(data).have.property('connectionType');
    });

    it('generates the right provider', async () => {
        expect(data.provider).oneOf(['telekom', 'vodafone', 'o2']);
    });

    it('generates the right location', async () => {
        expect(data.location).have.property('coordinates');
        expect(data.location.coordinates.latitude).within(53.901706, 54.818936);
        expect(data.location.coordinates.longitude).within(8.753612, 10.851482);
    });
});
