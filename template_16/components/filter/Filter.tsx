import React, { useState } from 'react';
import styles from "./Filter.module.scss";

const Filter: React.FC = () => {
    const cleaningOptions: string[] = ['One-time', 'Twice a week', 'Every week'];
    const allergyOptions: string[] = ['None', 'Cat', 'Dog'];
    const typeOfCleaningOptions: string[] = [
        'Regular cleaning',
        'Window cleaning',
        'After repairing',
        'After relocation'
    ];

    const renderOptions = (options: string[], onChange: (selectedOptions: string[]) => void): JSX.Element => {
        return (
            <ul>
                {options.map((option: string, index: number) => (
                    <li key={index}>
                        <input
                            type="checkbox"
                            onChange={(e) => handleCheckboxChange(e, option, onChange)}
                        />
                        <span>{option}</span>
                    </li>
                ))}
            </ul>
        );
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, option: string, onChange: (selectedOptions: string[]) => void) => {
        if (event.target.checked) {
            onChange([option]);
        } else {
            onChange([]);
        }
    };

    const [cleaningOptionsSelected, setCleaningOptionsSelected] = useState<string[]>([]);
    const [allergyOptionsSelected, setAllergyOptionsSelected] = useState<string[]>([]);
    const [typeOfCleaningOptionsSelected, setTypeOfCleaningOptionsSelected] = useState<string[]>([]);
    const [address, setAddress] = useState('');

    const handleCleaningChange = (selectedOptions: string[]) => {
        setCleaningOptionsSelected(selectedOptions);
    };

    const handleAllergyChange = (selectedOptions: string[]) => {
        setAllergyOptionsSelected(selectedOptions);
    };

    const handleTypeOfCleaningChange = (selectedOptions: string[]) => {
        setTypeOfCleaningOptionsSelected(selectedOptions);
    };

    const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(event.target.value);
    };

    const handleSearch = () => {
        const requestData = {
            cleaning: cleaningOptionsSelected[0] || '',
            allergy: allergyOptionsSelected[0] || '',
            typeOfCleaning: typeOfCleaningOptionsSelected[0] || '',
            address,
        };

        console.log('Sending request:', requestData);

        setCleaningOptionsSelected([]);
        setAllergyOptionsSelected([]);
        setTypeOfCleaningOptionsSelected([]);
        setAddress('');
    };

    const renderDays = () => {
        const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

        return (
            <div className={styles.calendarDays}>
                {days.map((day, index) => (
                    <div key={index}>
                        <span>{day}</span>
                        <span className={styles.calendarNum}>{index + 30}</span>
                    </div>
                ))}
            </div>
        );
    };

    const renderHours = () => {
        const hours = Array.from({ length: 16 }, (_, index) => index + 7);

        return (
            <div className={styles.calendarHours}>
                {hours.map((hour, index) => (
                    <div key={index}>
                        <span>{hour}</span>
                        <div className={styles.hourLine}></div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className={styles.filter}>
            <div>
                <h2>Filter</h2>
                <div className={styles.filterContent}>
                    <div className={styles.filterWrap}>
                        <div className={styles.filterCategory}>
                            <div className={styles.filterCategoryMain}>
                                <h3>Cleaning</h3>
                                {renderOptions(cleaningOptions, handleCleaningChange)}
                                <h3>Allergy</h3>
                                {renderOptions(allergyOptions, handleAllergyChange)}
                                <h3>Type of cleaning</h3>
                                {renderOptions(typeOfCleaningOptions, handleTypeOfCleaningChange)}
                            </div>
                            <div className={styles.filterCategoryFooter}>
                                <h3>Address</h3>
                                <input type="text" placeholder="street" value={address} onChange={handleAddressChange} />
                            </div>
                        </div>
                        <button className={styles.filterBtn} onClick={handleSearch}>Search</button>
                    </div>
                    <div className={styles.filterCalendar}>
                        <div className={styles.calendarHeader}>
                            <span>Febrary</span>
                        </div>
                        {renderDays()}
                        {renderHours()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filter;