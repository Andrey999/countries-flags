import { useEffect, useState } from 'react'
import { Search } from './Search'
import { CustomSelect } from './CustomSelect'
import styled from 'styled-components'

const options = [
    { value: 'Africa', label: 'Africa' },
    { value: 'America', label: 'America' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' },
];

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media(min-width: 767px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
  `;

export const Controls = ({ handleSearch }) => {
    const [searchText, setSearchText] = useState('');
    const [region, setRegion] = useState('');

    useEffect(() => {
        const regionValue = region?.value || '';
        console.log(regionValue);
        handleSearch(searchText, regionValue)
    }, [searchText, region])

    return (
        <Wrapper>
            <Search
                searchText={searchText}
                setSearchText={setSearchText}
            />
            <CustomSelect
                options={options}
                isSearchable={false}
                placeholder="Filter by region"
                value={region}
                onChange={setRegion}
                isClearable
            />
        </Wrapper>
    )
}