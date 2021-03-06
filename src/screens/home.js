import React, { Component } from 'react';
import { Text, View, ActivityIndicator, Alert, FlatList, StyleSheet } from 'react-native';
import { Container, Header, Body, Title, Content, ListItem } from 'native-base';

import Modal from '../components/modal';
import DataItem from '../components/list_item';
import { getArticles } from '../services/news';


export default class HomeScreen extends Component {    

    constructor(props) {
        super(props);

        this._handleItemDataOnPress = this._handleItemDataOnPress.bind(this)
        this._handleModalClose = this._handleModalClose.bind(this)

        this.state = {
            isLoading: true,
            data: null,
            isError: false,
            setModalVisible: false,
            modalArticleData: {}
        }
    }

    

    _handleItemDataOnPress(articleData) {
        this.setState({
            setModalVisible: true,
            modalArticleData: articleData
        })
    }

    _handleModalClose() {
        this.setState({
            setModalVisible: false,
            modalArticleData: {}
        })
    }

    componentDidMount() {
        getArticles().then(data => {
            this.setState({
                isLoading: false,
                data: data
            })
        }, error => {
            Alert.alert("Sorry", "There's been an error")
        })
    }

    render() {
        let view = this.state.isLoading ? (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator animating={this.state.isLoading} color="#41A30D" />
                <Text style={{ marginTop: 8 }} children="Please wait..." />
            </View>
        ) : (
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => {
                        return (
                            <ListItem>
                                <DataItem onPress={this._handleItemDataOnPress} data={item} />
                            </ListItem>
                        )
                    }}
                    keyExtractor={(item, index) => index.toString()} />

            )
        return (
         
            
            <Container>
               
                     
                <Content
                    contentContainerStyle={{ flex: 1, backgroundColor: '#fff' }}
                    padder={false}>
                        {view}
                </Content>
                <Modal 
                    showModal={this.state.setModalVisible}
                    articleData={this.state.modalArticleData}
                    onClose={this._handleModalClose}/>
            </Container>
        
        )
    }
}



