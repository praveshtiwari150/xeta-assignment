import React from 'react';

const FoodEntriesTable = ({ foodEntries }) => {
    return (
        <div className='table-container font-inter'>
            <div className='table-header'>
                Food Entries
            </div>
            <div className='table-wrapper m-4 rounded-lg'>
                <table>
                    <thead className=''>
                        <tr>
                            <th>Meal</th>
                            <th>Food</th>
                            <th>Proteins</th>
                            <th>Carbs</th>
                            <th>Fat</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {foodEntries.map((entry, index) => (
                            <tr key={index} className=''>
                                <td className=''>{entry.Meal}</td>
                                <td>{entry.Food}</td>
                                <td>{entry.Proteins}</td>
                                <td>{entry.Carbs}</td>
                                <td>{entry.Fat}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FoodEntriesTable;
