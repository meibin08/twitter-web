import { createSlice } from '@reduxjs/toolkit';
import { FollowsState } from './type';
import { uuid } from '@/utils/tools';

const initialState: FollowsState = {
  list: [
    {
      name: 'Cristiano Ronaldo',
      desc: 'This Privacy Policy addresses the collection and use of personal information',
      avatar: 'https://pbs.twimg.com/profile_images/1587290337587904512/Y4s_eu5O_x96.jpg',
      id: uuid(),
    },
    {
      name: 'National Theatre',
      desc: 'here for the drama - live shows on southbank - touring nationwide - streaming worldwide http://ntathome.com - in cinemas http://ntlive.com - in schools with nt collection',
      avatar: 'https://pbs.twimg.com/profile_images/1024598410517786625/veBhR6VZ_x96.jpg',
      id: uuid(),
    },
    {
      name: 'FabrizioRomano',
      desc: 'Here we go! ©',
      avatar: 'https://pbs.twimg.com/profile_images/1486761402853380113/3ifAqala_x96.jpg',
      id: uuid(),
    },
    {
      name: 'Ronaldo Cristiano',
      desc: 'Privacy Policy addresses the collection',
      avatar: 'https://pbs.twimg.com/profile_images/1490735661409832963/MdjPf5jL_x96.jpg',
      id: uuid(),
    },
    {
      desc: 'The official Twitter feed of the Sky Sports Football channel, including EFL, SPFL and the UEFA Nations League.',
      name: 'Sky Sports Football',
      avatar: 'https://pbs.twimg.com/profile_images/1483397197324558337/aHX12TV3_x96.jpg',
      id: uuid(),
    },
    {
      name: 'FabrizioRomano',
      desc: 'Here we go! ©',
      avatar: 'https://pbs.twimg.com/profile_images/1486761402853380113/3ifAqala_x96.jpg',
      id: uuid(),
    },
    {
      name: 'Manchester Unitedo',
      desc: 'The home of Manchester United.',
      avatar: 'https://pbs.twimg.com/profile_images/1486488950680215553/Rc0iOmOY_x96.jpg',
      id: uuid(),
    },
    {
      name: 'Hubble',
      desc: 'The official Twitter account for the NASA Hubble Space Telescope, managed and operated by',
      avatar: 'https://pbs.twimg.com/profile_images/1587556120821784576/bjr0s_kc_400x400.jpg',
      id: uuid(),
    },
  ],
};

export const FollowSlice = createSlice({
  name: 'followsReducer',
  initialState,
  reducers: {},
});
export const { actions } = FollowSlice;
export default FollowSlice.reducer;
