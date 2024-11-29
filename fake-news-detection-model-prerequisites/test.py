import pickle
from Prediction import Prediction
from Prediction import FakeNewsLSTM
import pandas as pd
import torch
import pandas as pd
with open('RF.pkl', 'rb') as f:
    RF = pickle.load(f)
with open('GB.pkl', 'rb') as f:
    GB = pickle.load(f)
with open('LR.pkl', 'rb') as f:
    LR = pickle.load(f)
with open('OC.pkl', 'rb') as f:
    OC = pickle.load(f)
with open('vect.pkl', 'rb') as f:
    vect = pickle.load(f)
with open('PT.pkl', 'rb') as f:
    pt = pickle.load(f)
with open('vocab.pkl', 'rb') as f:
    vocab = pickle.load(f)


df = pd.read_csv("test.csv")
print(df)
pp = Prediction(OC, LR, GB, RF,pt, vect, vocab)
df = pp.add(df,"रुवा बन्दुकसहित \n रुवा बन्दुकसहित ", 0)
print(pp.predict())
print(pp.get_percent())