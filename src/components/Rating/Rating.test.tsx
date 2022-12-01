import { render, screen } from "@testing-library/react"
import { Rating } from "./Rating"


describe('Rating Component',()=>{
    it('Renders image', ()=>{
        render(<Rating rate={2} />);
        expect(screen.findByRole('heading'))
    })
    // it('Not renders image', ()=>{
    //     const numOfRate:number = 0
    //     render(<Rating rate={numOfRate}/>)
    //     expect(screen.getAllByRole('img')).not.toBeInTheDocument()
    // })
})