jest.mock('@svg/star.svg', ()=>'icon of star');
jest.mock('@svg/heart.svg', ()=>'icon of heart');

import { render, screen } from "@testing-library/react"
import { Rating } from "./Rating"


describe('Rating Component',()=>{
    it('Renders image', ()=>{
        render(<Rating rate={2} variant='hearts'/>)
        expect(screen.getByText('icon of heart'))
    })
})