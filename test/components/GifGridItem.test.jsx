import { render, screen } from '@testing-library/react';
import { GifGridItem } from '../../src/components/GifGridItem';

describe('Pruebas de <GifGridItem />', () => {

    const image = {
      id: '1234567890',
      title: 'Saitama',
      url: 'https://one-punch.com/saitama.jpg',

    }

    test('Debe hacer match con el snapshot', ()=>{
      const {container} = render(<GifGridItem key={image.id} {...image} />);
      expect(container).toMatchSnapshot();
    });

    test('debe de mostrar la imagen con el URL y el ALT indicado', () =>{
      render(<GifGridItem {...image}/>);
      //screen.debug();
      //expect( screen.getByRole('img').src ).toBe(image.url);
      //expect( screen.getByRole('img').alt ).toBe(image.title);
      const {src, alt} = screen.getByRole('img');
      expect(src).toBe(image.url);
      expect(alt).toBe(image.title);
    });

    test('Debe de mostrar el titulo en el componente', () => {
      render(<GifGridItem {...image}/>);
      expect(screen.getByText(image.title)).toBeTruthy();
    });
 });