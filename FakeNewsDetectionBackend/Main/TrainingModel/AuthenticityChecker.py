import pickle
from Main.TrainingModel.Prediction import Prediction
import pandas as pd
import torch,os
import pandas as pd
class AuthenticityChecker:
    def __init__(self) -> None:
        print(os.path.dirname(__file__) + '\\GB.pkl',Prediction)
        with open(os.path.dirname(__file__) + '\\PT.pkl', 'rb') as f:
            pt = pickle.load(f)
        with open(os.path.dirname(__file__) + '\\RF.pkl', 'rb') as f:
            RF = pickle.load(f)
        with open(os.path.dirname(__file__) + '\\GB.pkl', 'rb') as f:
            GB = pickle.load(f)
        with open(os.path.dirname(__file__) + '\\LR.pkl', 'rb') as f:
            LR = pickle.load(f)
        with open(os.path.dirname(__file__) + '\\OC.pkl', 'rb') as f:
            OC = pickle.load(f)
        with open(os.path.dirname(__file__) + '\\vect.pkl', 'rb') as f:
            vect = pickle.load(f)
        with open(os.path.dirname(__file__) + '\\vocab.pkl', 'rb') as f:
            vocab = pickle.load(f)

        self.pp = Prediction(OC, LR, GB, RF,pt, vect, vocab)
    def check(self, text):
        self.pp.predict(text)
        return self.pp.get_percent()
    
