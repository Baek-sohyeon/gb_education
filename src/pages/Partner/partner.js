import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as style from "./styles";
import Title1 from "../../components/Title/Title1";
import Button2 from "../../components/Button/Button2";
import Card5 from "../../components/Card/Card5";
import Meta from '../../components/assets/images/n__16@2x.png';
import Sandbox from '../../components/assets/images/logo/thesandbox.png'

function Partner() {

  return (
    <>
            <style.Content>
                <Title1 english={'Partner'} korean={'GB 에듀케이션과 함께하는 파트너입니다.'}/>
            <Card5
                image={Meta}
                name={'GBF Meta'}
                course={'10년차 메타버스 전문 제작사'}
                content={'GBF Meta는 10년차 메타버스 전문 제작사로서 1000여건이 넘는 메타버스 프로젝트와 60여명의 전문 인력을 보유하고 있습니다. 현재는 더샌드박스 공식 빌드스튜디오, 두나무 NFT 파트너십을 맺으며 메타버스의 다양한 분야로 뻗어나가고 있습니다.'}
            />
            <Card5
                image={Sandbox}
                name={'The Sandbox'}
                course={'글로벌 최대 블록체인 기반 메타버스'}
                content={'더 샌드박스는 글로벌 최대 블럭체인 기반 메타버스 플랫폼으로 NFT 및 자체 가상화폐 SAND를 통해 수익화를 시킬 수 있는 모델을 가지고 있으며 크리에이터 에코시스템을 점차 확장해나가고 있습니다.'}
            />
        <style.row>
            <Button2
                name={'파트너 문의하기'}
                color={'white'}
                background={'#55AABE'}
            />
        </style.row>
    </style.Content>

        
    </>
  );
}

export default Partner;