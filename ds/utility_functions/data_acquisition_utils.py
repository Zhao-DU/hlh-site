import os
import urllib3
import numpy as np 
import pandas as pd
import xml.etree.ElementTree as et




def Get_Pubmed_IDs(searchstring):
    #Obtaining IDs from Pubmed using eSearch API related to given searchstring(string)
    #Returns xml data containing IDs
    http = urllib3.PoolManager()
    eSearchRes = http.request('GET',f'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?term={searchstring}&retmax=100')
    return eSearchRes.data
    
def Parse_Pubmed_IDs(IDxml):
    #Parsing the xml file received from Get_Pubmed_IDs
    #Returning the received datasets corresponding to the IDs
    http = urllib3.PoolManager()
    IdNode = et.fromstring(IDxml).find("IdList")
    #IdNode = xtree.getroot().find("IdList")
    ID_LIST = [i.text for i in IdNode.findall("Id")]
    EFETCH_POST_BODY = {"db": "pubmed","retmode": "xml","id": ",".join(ID_LIST)}
    Fetched_Articles = http.request("POST","https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi",fields = EFETCH_POST_BODY)
    return Fetched_Articles.data

def Pubmed_Articles_to_Pandas(Articles):
    #Parsing article data obtained from Parse_Pubmed_IDs into Pandas
    #
    titles = []
    PMID = []
    doi = []
    keywords = []
    root = et.fromstring(Articles)
    for article in root.findall("PubmedArticle"):
        for i in article.iter("ArticleTitle"):
            print(i.text)