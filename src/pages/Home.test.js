import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from './Home'

Enzyme.configure({ adapter: new Adapter() })

describe("When Home Renders", () => {
    it("displays text", () => {
        const renderedHome = shallow(<Home />)
        
        const homeWelcomeTag = renderedHome.find("h3")
        const homeWelcomeTagText = homeWelcomeTag.text()

        expect(homeWelcomeTagText).toEqual("Welcome to Monkey Tinder")
    })
})

// STRETCH: Checks for the first image tag and all of its props