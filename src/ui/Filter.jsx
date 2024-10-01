import { useSearchParams } from 'react-router-dom';

function Filter({ categories, options }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentCategory = searchParams.get(categories) || options.at(0).value;

    function handleClick(value) {
        searchParams.set(categories, value);
        if (searchParams.get('page')) searchParams.set('page', 1);
        setSearchParams(searchParams);
    }

    return (
        <div>
            {options.map((option) => (
                <button
                    key={option.value}
                    onClick={() => handleClick(option.value)}
                >
                    {option.label}
                </button>
            ))}
        </div>
    );
}

export default Filter;
