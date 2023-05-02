import type { FilterInitialDataType } from 'src/reducer/InitialStateType'

export const initialState: FilterInitialDataType = {
  filters: {
    depth: 0,
    category: [
      {
        id: 0,
        label: 'Availibility',
        value: 'availibility',
        selected: false,
        options: [{
          label: 'Online',
          value: 'online',
        },
        {
          label: 'Offline',
          value: 'offline',
        }],
        questionType: 'SelectList',
        selectedValue: null
      },
      {
        id: 1,
        label: 'Brand',
        value: 'brand',
        selected: false,
        options: [{
          label: 'Loreal',
          value: 'loreal',
        },
        {
          label: 'Wella',
          value: 'wella',
        },
        {
          label: 'HD Brows',
          value: 'hd brows',
        },
        {
          label: 'KB pro',
          value: 'kb pro',
        },
        {
          label: 'Cloud nine',
          value: 'cloud nine'
        }],
        questionType: 'SelectList',
        selectedValue: null
      },
      {
        id: 2,
        label: 'Quantity',
        value: 'quantity',
        selected: false,
        questionType: 'LinearSlider',
        selectedValue: null,
        options: [{
          value: 1,
          label: 1,
        },
        {
          value: 10,
          label: 10,
        }]
      },
      {
        id: 3,
        label: 'Price',
        value: 'price',
        selected: false,
        questionType: 'LinearSlider',
        selectedValue: null,
        options: [{
          value: 50,
          label: 50,
        },
        {
          value: 1000,
          label: 1000,
        }]
      }
    ]
  }
}