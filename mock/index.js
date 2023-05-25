const Mock=require('mockjs')
const Random=Mock.Random

Mock.Random.extend({
    cpositionCode(){
        return this.pick(['customer','device'])
    },
    clabel(){
        return this.pick(['硅钢二期工业建构筑物','AutoTest产线区域1','AutoTest产线区域2'])
    },
    cdomainLabel(){
        return this.pick(['宝山基地/硅钢部/硅钢二期工业建构筑物','宝山基地/炼铁厂/硅钢二期工业建构筑物1','宝山基地/炼钢厂/硅钢二期工业建构筑物2'])
    }
})
const data=Mock.mock({
    'data|5-10':[{
        'id':'@id',
        'label':'@clabel',
        'values':{
            'positionCode':'@cpositionCode',
            'domainLabel':'@cdomainLabel'
        },
        'layer|+1':1
    }]})

module.exports=data