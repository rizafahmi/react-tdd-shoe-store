import React from 'react'
import { shallow } from 'enzyme'
import ProductList from './ProductList'

let mockProducts, mockProductSelectFn, wrapper

beforeEach(() => {
  mockProducts = [
    { id: 1, name: 'Mock product 1', brand: 'MockBrandA' },
    { id: 2, name: 'Mock product 2', brand: 'MockBrandB' },
    { id: 3, name: 'Mock product 3', brand: 'MockBrandC' }
  ]
  mockProductSelectFn = product => {
    console.log('You selected', product)
  }

  wrapper = shallow(
    <ProductList
      products={mockProducts}
      onProductSelect={mockProductSelectFn}
    />
  )
})
test('should render <ProductList />', () => {
  expect(wrapper).toBeDefined()
})
test('ProductList should have list of products as ul and li', () => {
  expect(wrapper.find('li').length).toEqual(mockProducts.length)
})
test('ProductList should have product name', () => {
  const firstElement = wrapper.find('li').first()
  expect(firstElement.contains(mockProducts[0].name)).toEqual(true)
})
test('ProductList should have brand name', () => {
  const lastElement = wrapper.find('li').last()
  expect(lastElement.contains(mockProducts[2].brand)).toEqual(true)
})
