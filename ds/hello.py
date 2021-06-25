import urllib3
import numpy as np 


np.array([1,2,3,4,5])

link = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?term=hlh&RetMax=5000"

http = urllib3.PoolManager()
f = http.request('GET', link)

print(f)