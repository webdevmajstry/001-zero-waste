import { render, screen } from "@testing-library/react"
import { Rating } from "./Rating"


describe('Rating Component',()=>{
    it('Renders hearts', ()=>{
        render(<Rating variant='hearts' rate={1}/>)
        expect(screen.getAllByTestId('hearts rating'))
    })
    it('Renders stars', ()=>{
        render(<Rating variant='stars' rate={1}/>)
        expect(screen.getAllByTestId('stars rating'))
    })
    it('Renders x times', ()=>{
        const ratings =4
        render(<Rating variant='stars' rate={ratings}/>)
        const ratingArr = screen.getAllByTestId('stars rating')
        for(let i=0;i<ratings;i++){
            expect(ratingArr[i]).toHaveClass('mx-px')
        }
        for(let i=ratings;i<ratings;i++){
            expect(ratingArr[i]).toHaveClass('opacity-50')
        }
    })
    it('Renders number of rating', ()=>{
        render(<Rating type='number' rate={2}/>)
        expect(screen.getAllByTestId('number of rating'))
    })
    it('Check hidden svg`s', ()=>{
        const ratings =3
        render(<Rating variant='stars' type="hidden" rate={ratings}/>)
        const ratingArr = screen.getAllByTestId('stars rating')
        for(let i=ratings;i<5;i++){
            expect(ratingArr[i]).toHaveClass('hidden')
        }
    })
    it('Not rendering', ()=>{
        render(<Rating rate={0}/>)
        expect(screen.queryByTestId("rating container")).toBeFalsy()
    })
})