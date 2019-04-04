import {orderBy} from "lodash";

import { _api_key, language, category, business_category, sport_category, health_category, technology_category, country, articles_url} from '../config/rest_config';


export async function getArticles(){

    try {
        let articles = await fetch(`${articles_url}?country=${country}&category=${category}&language=${language}`,{
            headers:{
                'X-API-KEY':_api_key
            }
        });

        let result = await articles.json();
        articles= null;

        return orderBy(result.articles,'publishedAt','desc');

    } catch (error) {
        throw error
    }
}

export async function getBusinessArticles(){

    try {
        let articles = await fetch(`${articles_url}?country=${country}&category=${business_category}&language=${language}`,{
            headers:{
                'X-API-KEY':_api_key
            }
        });

        let result = await articles.json();
        articles= null;

        return orderBy(result.articles,'publishedAt','desc');

    } catch (error) {
        throw error
    }
}

export async function getHealthArticles(){

    try {
        let articles = await fetch(`${articles_url}?country=${country}&category=${health_category}&language=${language}`,{
            headers:{
                'X-API-KEY':_api_key
            }
        });

        let result = await articles.json();
        articles= null;

        return orderBy(result.articles,'publishedAt','desc');

    } catch (error) {
        throw error
    }
}

export async function getSportArticles(){

    try {
        let articles = await fetch(`${articles_url}?country=${country}&category=${sport_category}&language=${language}`,{
            headers:{
                'X-API-KEY':_api_key
            }
        });

        let result = await articles.json();
        articles= null;

        return orderBy(result.articles,'publishedAt','desc');

    } catch (error) {
        throw error
    }
}

export async function getTechnologyArticles(){

    try {
        let articles = await fetch(`${articles_url}?country=${country}&category=${technology_category}&language=${language}`,{
            headers:{
                'X-API-KEY':_api_key
            }
        });

        let result = await articles.json();
        articles= null;

        return orderBy(result.articles,'publishedAt','desc');

    } catch (error) {
        throw error
    }
}
