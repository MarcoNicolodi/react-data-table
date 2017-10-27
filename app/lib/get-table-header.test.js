import getTableHeader from './get-table-header';

describe('get-table-header', () => {
    it('should throw if argument is not an object', () => {
        expect( () => {
            getTableHeader(["a","b"]);
            getTableHeader("aaa");
            getTableHeader(1);
            getTableHeader(() => {})
        }).toThrow()
    })

    it('should return object keys', () => {
        expect(getTableHeader({a: 1, b: 2})).toEqual(["a","b"]);
    });
});