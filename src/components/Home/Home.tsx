import { createRef } from 'react';
import { Popup } from './Build/Popup';
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Layout, Map } from './Build';

export const Home = () => {
    return (
        <Layout>
            <>
                <Map />
                <Popup />
            </>
        </Layout>
    )
}
