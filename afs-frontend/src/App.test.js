import React from 'react';

import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.3';
import FarmerDashboard from './Components/Pages/FarmerDashboard';
import EditFarmerProfile from './Components/Pages/EditFarmerProfile';
import FarmProduce from './Components/Pages/FarmProduce';
import SideNavigation from './Components/SideNav';

enzyme.configure({ adapter: new Adapter() });

//  Tests for FarmerDashboard Compinent
describe('Farmer Dashboard', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<FarmerDashboard />);
  });
  it('should show Welcome', () => {
    const content = wrapper.find('h2');
    expect(content.text()).toBe('Welcome');
  });
  it('should have link', () => {
    const content = wrapper.find('.link');
    expect(content.text()).toBe('Click here');
  });
});

// Tests for EditFarmerProfile Component
describe('Edit Farmer Profile', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<EditFarmerProfile />);
  });
  it('should contain a side nav', () => {
    const content = wrapper.find('.side');
    expect(content.text()).toBe('<SideNavigation />');
  });
  it('should have a main content', () => {
    const content = wrapper.find('.main');
    expect(content.text()).toBe('<EditFarmerProfileForm />');
  });
});

// Tests for FarmProduce Component
describe('Farmer Produce', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<FarmProduce />);
  });
  it('should contain a side nav', () => {
    const content = wrapper.find('.side');
    expect(content.text()).toBe('<SideNavigation />');
  });
  it('should have a main content', () => {
    const content = wrapper.find('.main');
    expect(content.text()).toBe('<FarmProduceForm />');
  });
});

// Tests for SideNav Component
describe('Side Navigation', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SideNavigation />);
  });
  it('should show first name', () => {
    const content = wrapper.find('.name');
    expect(content.text()).toBe('First Name');
  });
  it('should have a dashboard link', () => {
    const content = wrapper.find('#dashboard');
    expect(content.text()).toBe('Dashboard');
  });
  it('should have a profile link', () => {
    const content = wrapper.find('#profile');
    expect(content.text()).toBe('My Profile');


import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.3';
import ConsumerDashboard from './Components/Pages/ConsumerDashboard';
import EditConsumerProfile from './Components/Pages/EditConsumerProfile';
import SideNavigation from './Components/SideNav';

enzyme.configure({ adapter: new Adapter() });

//  Tests for ConsumerDashboard Component
describe('Consumer Dashboard', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ConsumerDashboard />);
  });
  it('should show Welcome', () => {
    const content = wrapper.find('h2');
    expect(content.text()).toBe('Welcome');
  });
  it('should have link', () => {
    const content = wrapper.find('.link');
    expect(content.text()).toBe('Click Here');
  });
});

// Tests for EditConsumerProfile Component
describe('Edit Consumer Profile', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<EditConsumerProfile />);
  });
  it('should contain a side nav', () => {
    const content = wrapper.find('.side');
    expect(content.text()).toBe('<SideNavigation />');
  });
  it('should have a main content', () => {
    const content = wrapper.find('.main');
    expect(content.text()).toBe('<EditProfileForm />');
  });
});

// Tests for SideNav Component
describe('Side Navigation', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SideNavigation />);
  });
  it('should show first name', () => {
    const content = wrapper.find('.name');
    expect(content.text()).toBe('First Name');
  });
  it('should have a dashboard link', () => {
    const content = wrapper.find('#dashboard');
    expect(content.text()).toBe('Dashboard');
  });
  it('should have a profile link', () => {
    const content = wrapper.find('#profile');
    expect(content.text()).toBe('My Profile');

import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ChatBox from './Components/Pages/ChatBox';
import ChatHeader from './Components/ChatHeader';
import ChatMessage from './Components/ChatMessage';
import ChatList from './Components/Pages/ChatList';

enzyme.configure({ adapter: new Adapter() });

// Test For ChatBox Component
describe('Chat Box', () => {
  it('should show text', () => {
    const wrapper = shallow(<ChatBox />);
    const content = wrapper.find('.chat-app');
    expect(content.text()).toBe('<ChatHeader /><ChatMessage /><ChatInput />');
  });
});

// Test For ChatHeader Component
describe('Chat Header', () => {
  it('should show icon', () => {
    const wrapper = shallow(<ChatHeader />);
    const content = wrapper.find('i');
    expect(content.hasClass('bx')).toBeTruthy();
  });
});

// Test For ChatMessage Component
describe('Chat Message', () => {
  it('should have class of body', () => {
    const wrapper = shallow(<ChatMessage />);
    const content = wrapper.find('section');
    expect(content.hasClass('body')).toBeTruthy();
  });
});

// Test For ChatList Component
describe('Chat List', () => {
  it('should show icon', () => {
    const wrapper = shallow(<ChatList />);
    const content = wrapper.find('i');
    expect(content.hasClass('bx')).toBeTruthy();

import { render } from '@testing-library/react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.3';
import App from './App';
import Wrapper from './Components/Wrapper';
import Services from './Components/Pages/Services';
import Home from './Components/Pages/Home';
import CrossServices from './Components/common/CrossServices';

enzyme.configure({ adapter: new Adapter() });

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Get Started/i);
  expect(linkElement).toBeInTheDocument();


import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.3';
import Products from './Components/Pages/Products';
import ProductsDisplay from './Components/Pages/ProductsDisplay';
import ProductsImageSlide from './Components/ProductsImageSlide';

enzyme.configure({ adapter: new Adapter() });

describe('Product', () => {
  it('should show text', () => {
    const wrapper = shallow(<Products />);
    const content = wrapper.find('h1');
    expect(content.text()).toBe('Showcase');
  });
});

describe('Product Display', () => {
  it('should have lenght', () => {
    const wrapper = shallow(<ProductsDisplay />);
    const content = wrapper.find('.payment');
    expect(content.length).toEqual(1);
  });
});

describe('Product Image Slide', () => {
  it('should have a carousel class', () => {
    const wrapper = shallow(<ProductsImageSlide />);
    const content = wrapper.find('#carouselExampleIndicators');
    expect(content.hasClass('carousel')).toBeTruthy();

import enzyme, { shallow, mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import SignUpForm from './Components/SignUpForm';
import Login from './Components/Pages/SignIn';

enzyme.configure({ adapter: new Adapter() });
const mockStore = configureMockStore([thunk]);

// SIGN UP TESTS
describe('SignUpForm', () => {
  it('should show text', () => {
    const wrapper = shallow(<SignUpForm />);
    const content = wrapper.find('#T-C');
    expect(content.text()).toBe(
      'By clicking Register, you are indicating that you have read and agree to the Terms & Conditions of using this service.',
    );
  });

  it('should be defined', () => {
    const wrapper = shallow(<SignUpForm />);
    const text = wrapper.find('button');
    expect(text.text()).toBe('Register');
  });
});

// SIGN IN TESTS
describe('Login', () => {
  const store = mockStore({
    serviceReducer: { service: '' },
  });
  const wrapper = mount(
    <Provider store={store}>
      <Login />
    </Provider>,
  );

  it('should show text', () => {
    const content = wrapper.find('h2');
    expect(content.text()).toBe('Login');
  });

  it('should be defined', () => {
    const text = wrapper.find('button');
    expect(text.text()).toBe('Submit');

  });
>>>>>>
});

// Testing Wrapper JS

describe('Wrapper', () => {
  it('should show text', () => {
    const wrapper = shallow(<Wrapper />);
    const text = wrapper.find('div h1');
    expect(text.text()).toBe('Team-044 Product');
  });

  it('should show text', () => {
    const wrapper = shallow(<Wrapper />);
    const text = wrapper.find('div ul .active');
    expect(text.text()).toBe('Home');
  });

  it('should show text', () => {
    const wrapper = shallow(<Wrapper />);
    const text = wrapper.find('div ul .services');
    expect(text.text()).toBe('Services');
  });
});

// Testing Services JS
describe('Service', () => {
  it('should display', () => {
    const services = shallow(<Services />);
    const content = services.find('h2');
    expect(content.text()).toBe('Services');
  });

  it('should should show', () => {
    const services = shallow(<Services />);
    const content = services.find('#consumers');
    expect(content.text()).toBe('Consumers');
  });

  it('should should show', () => {
    const services = shallow(<Services />);
    const content = services.find('#investors');
    expect(content.text()).toBe('Investors');
  });

  it('should should show', () => {
    const services = shallow(<Services />);
    const content = services.find('#farmers');
    expect(content.text()).toBe('Farmers');
  });
});

// Testing Home JS

describe('Home', () => {
  it('should show text', () => {
    const home = shallow(<Home />);
    const text = home.find('.hero-container h1');
    expect(text.text()).toBe(
      'We Connect Farmers, Investors and Consumers around the World',
    );
  });

  it('should show text', () => {
    const home = shallow(<Home />);
    const content = home.find("[to='/accounts']");
    expect(content.text()).toBe('Get Started');
  });

  it('should show text', () => {
    const home = shallow(<Home />);
    const content = home.find('h3');
    expect(content.text()).toBe('Welcome to Team-044 Product');
  });
});

// Testing CrossService JS
describe('CrossServices', () => {
  it('should display', () => {
    const services = shallow(<CrossServices />);
    const content = services.find('h2');
    expect(content.text()).toBe('Services');
  });

  it('should display', () => {
    const services = shallow(<CrossServices />);
    const content = services.find('h3');
    expect(content.text()).toBe('We do offer awesome Services');


  });
});
