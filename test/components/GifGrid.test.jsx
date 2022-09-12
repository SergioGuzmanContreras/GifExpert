import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');
describe('Pruebas en <GifGrid/>', () => { 

    const category = "Saitama";
    const text = 'Cargando...';
    
    test('debe mostrar el loading inicialment', () => { 
        useFetchGifs.mockReturnValue({
            images: [], 
            isLoading: true
        });
        
        render(<GifGrid category={category}/>);
        expect( screen.getByText(text));
        expect( screen.getByText(category));
    });

    test('Debe mostrar items cuando se cargan las imágenes useFetchGifts', () => { 
        const gifs = [{
            id: 'ABC',
            title: 'Genos',
            url: 'https://one-punch.com.com/genos.jpg'
        },{
            id: '123',
            title: 'Saitama',
            url: 'https://one-punch.com/saitama.jpg'

        }];
        useFetchGifs.mockReturnValue({
            images: gifs, 
            isLoading: false
        });
        render(<GifGrid category={category}/>);

        expect(screen.getAllByRole('img').length).toBe(2);

    });

});