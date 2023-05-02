import { createContext, useReducer } from 'react';

import { nextDepthAction, prevDepthAction, resetDepthAction, updateValueAction } from 'src/actions/FilterAction';
import { FilterReducer } from 'src/reducer/FilterReducer';
import { initialState } from 'src/reducer/InitialState';
import { filterTypes } from 'src/reducer/InitialStateType';

export const FilterContext = createContext<any>(initialState)

export const FilterContextProvider = ({ children }: any): any => {
    const [state, dispatch] = useReducer(FilterReducer, initialState);
    const { category } = state.filters

    function update(arr: filterTypes[], id: number, updateData?: any) {
        // function to update the value by id
        return arr.map((item, index) => index === id ? { ...item, ...updateData } : { ...item, selected: false })
    }

    const resetDepth = () => {
        const resetValue = category.map((item: any) => {
            return { ...item, selected: false }
        })

        dispatch(resetDepthAction({ depth: 0, category: resetValue }))
    }

    const nextDepth = (id: number) => {
        const prevSelected = category[id].selected;
        const depth = state.filters.depth + 1;
        const result = update(category, id, {
            selected: !prevSelected
        });

        dispatch(nextDepthAction({ depth: depth, category: result }))
    }

    const prevDepth = (id: number) => {
        const depth = state.filters.depth - 1;
        const result = update(category, id, {
            selected: false
        });

        dispatch(prevDepthAction({ depth: depth, category: result }))
    }

    const updateValue = (id: number, value: string) => {
        const updateValue = update(category, id, {
            selectedValue: value
        })

        dispatch(updateValueAction({ category: updateValue }))
    }

    return (
        <FilterContext.Provider
            value={{
                filters: state.filters,
                resetDepth,
                nextDepth,
                prevDepth,
                updateValue
            }}>
            {children}
        </FilterContext.Provider>
    )
}