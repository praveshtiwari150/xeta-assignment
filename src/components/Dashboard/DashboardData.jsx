import React, { useState } from 'react';
import FoodEntriesTable from './FoodEntriesTable';
import { HiMiniFire } from "react-icons/hi2";
import energy from '../../assets/dashboard/energy.svg';
import chicken from '../../assets/dashboard/chicken.svg'
import apple from '../../assets/dashboard/apple.svg'
import cheeseburger from '../../assets/dashboard/cheeseburger.svg';
import NutritionCard from './NutritionCard';
import WeightChart from './WeightChart';
import BodyFat from './BodyFat';
import MilesWalkedChart from './MilesWalkedChart';

const DashboardData = () => {
    const foodEntries = [
        { Meal: 'Breakfast', Food: 'Oatmeal', Calories: 173, Proteins: 5, Carbs: 27, Fat: 3 },
        { Meal: 'Lunch', Food: 'Grilled Chicken Salad', Calories: 245, Proteins: 30, Carbs: 10, Fat: 5 },
        { Meal: 'Snack', Food: 'Greek Yogurt', Calories: 100, Proteins: 10, Carbs: 15, Fat: 0 },
        { Meal: 'Dinner', Food: 'Steak and Vegetables', Calories: 395, Proteins: 25, Carbs: 20, Fat: 15 },
        { Meal: 'Dessert', Food: 'Fruit Salad', Calories: 84, Proteins: 1, Carbs: 20, Fat: 0 },
        { Meal: 'Breakfast', Food: 'Scrambled Eggs', Calories: 130, Proteins: 12, Carbs: 1, Fat: 10 },
        { Meal: 'Lunch', Food: 'Turkey Sandwich', Calories: 325, Proteins: 20, Carbs: 30, Fat: 5 },
        { Meal: 'Snack', Food: 'Apple', Calories: 100, Proteins: 0, Carbs: 25, Fat: 0 },
        { Meal: 'Dinner', Food: 'Salmon and Quinoa', Calories: 426, Proteins: 22, Carbs: 35, Fat: 12 },
        { Meal: 'Dessert', Food: 'Chocolate Cake', Calories: 372, Proteins: 3, Carbs: 45, Fat: 15 },
        { Meal: 'Breakfast', Food: 'Pancakes', Calories: 290, Proteins: 6, Carbs: 40, Fat: 8 },
        { Meal: 'Lunch', Food: 'Veggie Wrap', Calories: 282, Proteins: 8, Carbs: 35, Fat: 10 },
        { Meal: 'Snack', Food: 'Mixed Nuts', Calories: 174, Proteins: 6, Carbs: 10, Fat: 15 },
        { Meal: 'Dinner', Food: 'Chicken Stir Fry', Calories: 382, Proteins: 28, Carbs: 30, Fat: 10 },
        { Meal: 'Dessert', Food: 'Ice Cream', Calories: 286, Proteins: 4, Carbs: 30, Fat: 15 }
    ];

    const totalproteins = foodEntries.reduce((accumulator, entry) => accumulator + entry.Proteins, 0);
    const totalcarbs = foodEntries.reduce((accumulator, entry) => accumulator + entry.Carbs, 0);
    const totalfats = foodEntries.reduce((accumulator, entry) => accumulator + entry.Fat, 0);
    const totalcalories = foodEntries.reduce((accumulator, entry) => accumulator + entry.Calories, 0);

    console.log(foodEntries.length);
    const avgproteins = totalproteins / (foodEntries.length);
    const avgcarbs = totalcarbs / (foodEntries.length);
    const avgfats = totalfats / (foodEntries.length);
    const avgcalories = totalcalories / (foodEntries.length);


    const nutritionalData = [
        {
            id: 1,
            catg: 'calories',
            value: avgcalories.toFixed(1),
            icon: energy
        },
        {
            id: 2,
            catg: 'proteins',
            value: avgproteins.toFixed(1),
            icon: chicken
        },
        {
            id: 3,
            catg: 'carbs',
            value: avgcarbs.toFixed(1),
            icon: apple
        },
        {
            id: 4,
            catg: 'fats',
            value: avgfats.toFixed(1),
            icon: cheeseburger
        }
    ]

    const weightProgress = [
        { month: 1, weight: 70, goal: 68 },
        { month: 2, weight: 72, goal: 67 },
        { month: 3, weight: 68, goal: 66 },
        { month: 4, weight: 71, goal: 65 },
        { month: 5, weight: 66, goal: 64 },
        { month: 6, weight: 69, goal: 63 },
        { month: 7, weight: 64, goal: 62 },
        { month: 8, weight: 67, goal: 61 },
        { month: 9, weight: 62, goal: 60 },
        { month: 10, weight: 65, goal: 59 }
    ];

    const walkdata = [
        { day: 'Sunday', miles: 6.2 },
        { day: 'Monday', miles: 3.2 },
        { day: 'Tuesday', miles: 2.8 },
        { day: 'Wednesday', miles: 4.1 },
        { day: 'Thursday', miles: 5.0 },
        { day: 'Friday', miles: 2.24 },
        { day: 'Saturday', miles: 3.6 }
    ];
    return (
        <div>
            <NutritionCard nutritionalData={nutritionalData} />
            <div className='mx-7 flex flex-col gap-6 md:flex-row'>
                <div className='w-full md:w-[55%]'>
                    <WeightChart weightProgress={weightProgress} />
                </div>
                <div className='w-full md:w-[42%]'>
                    <BodyFat />
                </div>
            </div>
            <div className='mx-7 flex flex-col gap-6 md:flex-row'>
                <div className='w-full md:w-[55%]'>
                    <FoodEntriesTable foodEntries={foodEntries} />
                </div>
                <div className='w-full md:w-[42%]'>
                    <MilesWalkedChart walkdata={walkdata} />
                </div>
            </div>
        </div>
    );
};

export default DashboardData;
