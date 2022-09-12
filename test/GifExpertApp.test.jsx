import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas de <GifExpertApp />', () => { 

    test('Debe hacer match con el snapshot', ()=>{
        const {container} = render(<GifExpertApp />);
        expect(container).toMatchSnapshot();
    });

});