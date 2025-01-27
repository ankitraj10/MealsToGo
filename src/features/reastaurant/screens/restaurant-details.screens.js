import React, { useState } from 'react';
import { RestaurantInfoCard } from "../components/reastaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { List } from 'react-native-paper';

export const RestaurantDetails = ({ route }) => {
    const [breakfast, setBreakfast] = useState(false);
    const [lunch, setLunch] = useState(false);
    const [dinner, setDinner] = useState(false);
    const [drinks, setDrinks] = useState(false);

    const handlePress = () => setExpanded(!expanded);
    const { restaurantsDetail } = route.params;
    return (
        <SafeArea >
            <RestaurantInfoCard restaurant={restaurantsDetail} />
            <List.Section title="Menu">

                <List.Accordion
                    title="Breakfast"
                    left={props => <List.Icon {...props} icon="bread-slice-outline" />}
                    expanded={breakfast}
                    onPress={() => setBreakfast(!breakfast)}>
                    <List.Item title="Omlet" />
                    <List.Item title="Dosa" />
                </List.Accordion>
                <List.Accordion
                    title="Lunch"
                    left={props => <List.Icon {...props} icon="food" />}
                    expanded={lunch}
                    onPress={() => setLunch(!lunch)}>
                    <List.Item title="South meal" />
                    <List.Item title="North meal" />
                </List.Accordion>
                <List.Accordion
                    title="Dinner"
                    left={props => <List.Icon {...props} icon="food-turkey" />}
                    expanded={dinner}
                    onPress={() => setDinner(!dinner)}>
                    <List.Item title="Steak" />
                    <List.Item title="Sandwich" />
                </List.Accordion>
                <List.Accordion
                    title="Drinks"
                    left={props => <List.Icon {...props} icon="glass-mug-variant" />}
                    expanded={drinks}
                    onPress={() => setDrinks(!drinks)}>
                    <List.Item title="Beer" />
                    <List.Item title="Wishky" />
                </List.Accordion>
            </List.Section>
        </SafeArea>
    );
};
