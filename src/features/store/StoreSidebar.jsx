import Filter from '../../ui/Filter';

function StoreSidebar() {
    return (
        <Filter
            categories="category"
            options={[
                { value: 'all', label: 'All' },
                { value: 'first-aid', label: 'First Aid' },
                {
                    value: 'temperature-reduction',
                    label: 'Temperature Reduction',
                },
                { value: 'antibiotics', label: 'Antibiotics' },
                { value: 'antihistamines', label: 'Antihistamines' },
                { value: 'diabetes', label: 'Diabetes' },
                { value: 'vitamins', label: 'Vitamins' },
            ]}
        />
    );
}

export default StoreSidebar;
