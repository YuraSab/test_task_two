import React from 'react';

const SearchInput = ({setSearchParams}) => {
    return (
        <div>
            <form>
                <input
                    onChange={(event) => {
                        let filter = event.target.value;
                        if(filter){
                            setSearchParams( {filter} );
                        }else {
                            setSearchParams( {} );
                        }
                    }}
                />
            </form>
        </div>
    );
};

export default SearchInput;