module.exports = {
  mtData: mtData
}



function mtData() {
  var arr = [
    {
      "type": "单选",
      "Desc": "驾驶机动车在道路上违反道路交通安全法的行为，属于什么行为？",
      "Answer": [
        {
          "value": "A.违章行为",
          "name": "A"
        },
        {
          "value": "B.违法行为",
          "name": "B"
        },
        {
          "value": "C.过失行为",
          "name": "C"
        },
        {
          "value": "D.违规行为",
          "name": "D"
        }
      ],
      "RightAnswer": "B",
      "selected":'',
      "Fraction": 10
    },
    {
      "type": "单选",
      "Desc": " 机动车驾驶人违法驾驶造成重大交通事故构成犯罪的，依法追究什么责任？",
      "Answer": [
        {
          "value": "A.刑事责任",
          "name": "A"
        },
        {
          "value": "B.民事责任",
          "name": "B"
        },
        {
          "value": "C.经济责任",
          "name": "C"
        },
        {
          "value": "D.直接责任",
          "name": "D"
        }
      ],
      "RightAnswer": "A",
      "selected": '',
      "Fraction": 10
    },
    {
      "type": "单选",
      "Desc": "机动车驾驶人造成事故后逃逸构成犯罪的，吊销驾驶证且多长时间不得重新取得驾驶证？",
      "Answer": [
        {
          "value": "A.5年内",
          "name": "A"
        },
        {
          "value": "B.10年内",
          "name": "B"
        },
        {
          "value": "C.终生",
          "name": "C"
        },
        {
          "value": "D.20年内",
          "name": "D"
        }
      ],
      "RightAnswer": "C",
      "selected": '',
      "Fraction": 10
    },
    {
      "type": "多选",
      "Desc": "周某夜间驾驶大货车在没有路灯的城市道路上以90公里/小时的速度行驶，一直开启远光灯，在通过一窄路时，因加速抢道，导致对面驶来的一辆小客车撞上右侧护栏。周某的主要违法行为是什么？",
      "Answer": [
        {
          "value": "A.超速行驶",
          "name": "A"
        },
        {
          "value": "B.不按规定会车",
          "name": "B"
        },
        {
          "value": "C.疲劳驾驶",
          "name": "C"
        },
        {
          "value": "D.不按规定使用灯光",
          "name": "D"
        }
      ],
      "RightAnswer": "ABD",
      "selected": '',
      "Fraction": 20
    },
    {
      "type": "多选",
      "Desc": "林某驾车以110公里/小时的速度在城市道路行驶，与一辆机动车追尾后弃车逃离被群众拦下。经鉴定，事发时林某血液中的酒精浓度为135.8毫克/百毫升。林某的主要违法行为是什么？",
      "Answer": [
        {
          "value": "A.醉酒驾驶",
          "name": "A"
        },
        {
          "value": "B.超速驾驶",
          "name": "B"
        },
        {
          "value": "C.疲劳驾驶",
          "name": "C"
        },
        {
          "value": "D.肇事逃逸",
          "name": "D"
        }
      ],
      "RightAnswer": "ABD",
      "selected": '',
      "Fraction": 20
    },
    {
      "type": "多选",
      "Desc": "某日19时，杨某驾驶大客车，乘载57人（核载55人），连续行驶至次日凌晨1时，在江宁区境内104国道3008公里加110米处，因机动车左前胎爆裂，造成12人死亡、22人受伤的特大交通事故。杨某的主要违法行为是什么？",
      "Answer": [
        {
          "value": "A.疲劳驾驶",
          "name": "A"
        },
        {
          "value": "B.客车超员",
          "name": "B"
        },
        {
          "value": "C.超速行驶",
          "name": "C"
        },
        {
          "value": "D.操作不当",
          "name": "D"
        }
      ],
      "RightAnswer": "AB",
      "selected": '',
      "Fraction": 20
    },
    {
      "type": "判断",
      "Desc": "对未取得驾驶证驾驶机动车的，追究其法律责任。",
      "Answer": [
        {
          "value": "A.正确",
          "name": "A"
        },
        {
          "value": "B.错误",
          "name": "B"
        }
      ],
      "selected": '',
      "RightAnswer": "A",
      "Fraction": 5
    },
    {
      "type": "判断",
      "Desc": "对违法驾驶发生重大交通事故且构成犯罪的，不追究其刑事责任。",
      "Answer": [
        {
          "value": "A.正确",
          "name": "A"
        },
        {
          "value": "B.错误",
          "name": "B"
        }
      ],
      "RightAnswer": "B",
      "selected": '',
      "Fraction": 5
    }
  ]
  return arr
} 