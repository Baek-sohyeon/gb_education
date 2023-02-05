import React, { useState } from "react";
import * as style from "./styles";
import discord from '../../components/assets/images/n_27_em@2x.png';
import instagram from '../../components/assets/images/n_28_en@2x.png';
import link from '../../components/assets/images/n_29_eo@2x.png';
import youtube from '../../components/assets/images/n_30_ep@2x.png'

const SnsGroup = () => {
  return (
    <style.group>
        <a href='https://discord.com/invite/EGq9vdG9y8'><style.snsButton src={discord}/></a>
        <a href='https://www.instagram.com/gbf.studio_official/'><style.snsButton src={instagram}/></a>
        <a href=' https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEA1kXO9sNOlgAAAYP7Cev47rtdd9j-T2RPTD5PE93N0Yw-_gplN4wu1o-RTW59QmwwtG3EFyEm8WhSWFG7PyhqD9DuKEYgbffO8Wl-obTlpB-GaYtMM6ciZDQMCA2jTdISWMU=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fgbf-meta'><style.snsButton src={link}/></a>
        <a href='https://www.youtube.com/c/YouTube%EC%9E%90%EB%B2%A0?themeRefresh=1
'><style.snsButton src={youtube}/></a>
    </style.group>
  );
}

export default SnsGroup;
