
import mongoengine
# Create your models here.
class pbUser(mongoengine.Document):
    account = mongoengine.StringField(max_length=100)
    pwd = mongoengine.StringField(max_length=100)

class pbNav(mongoengine.Document):
    navCpAccount =mongoengine.StringField()
    navCpName =mongoengine.StringField()

class pbcpequ(mongoengine.Document):
    pbcpName = mongoengine.StringField()
    endTime = mongoengine.StringField(max_length=100)
    startBlance = mongoengine.FloatField()
    startTime = mongoengine.StringField()
    qhBlance = mongoengine.FloatField()
    gpBlance = mongoengine.FloatField()
    manage = mongoengine.FloatField()
    bonus = mongoengine.FloatField()
    withdrawal = mongoengine.FloatField()
    nowMoney = mongoengine.FloatField()
    addMoney = mongoengine.FloatField()
    nowEquity = mongoengine.FloatField()
    AddEquity = mongoengine.FloatField()
    maxEquity = mongoengine.FloatField()
    nowShow = mongoengine.StringField(max_length=100)
    nowBack = mongoengine.FloatField()
    maxBack = mongoengine.FloatField()
    gpMarket = mongoengine.FloatField()
    qhMarket = mongoengine.FloatField()
    ratio = mongoengine.StringField(max_length=100)

class pbcpUnder(mongoengine.Document):
    cpId = mongoengine.StringField(max_length=100)
    cpName = mongoengine.StringField(max_length=100)
    cpRemarks = mongoengine.StringField(max_length=200)
class pbcpAccount(mongoengine.Document):
    underId = mongoengine.StringField(max_length=100)
    underName = mongoengine.StringField(max_length=100)
    underType = mongoengine.StringField(max_length=100)
    bondName = mongoengine.StringField(max_length=100)
    bondAccount = mongoengine.StringField(max_length=100)
    bondPwd = mongoengine.StringField(max_length=100)
    remarks = mongoengine.StringField(max_length=200)

class qhfx(mongoengine.Document):
    account = mongoengine.StringField(max_length=100)
    timeDate = mongoengine.StringField(max_length=100)
    nowMoney = mongoengine.FloatField()
    access = mongoengine.FloatField()
    nowEquity = mongoengine.FloatField()
    maxEquity = mongoengine.FloatField()
    nowBack = mongoengine.FloatField()
    maxBack = mongoengine.FloatField()
    market = mongoengine.FloatField()
    ratio = mongoengine.StringField(max_length=100)