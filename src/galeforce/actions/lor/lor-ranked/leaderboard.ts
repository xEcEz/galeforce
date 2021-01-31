import Action from '../../action';
import { ENDPOINTS, RiotRegion } from '../../../../riot-api';
import SubmoduleMap from '../../../interfaces/submodule-map';
import { LorLeaderboardDTO } from '../../../interfaces/dto';
import { TakesRegion } from '../../mixins';

const BaseAction = TakesRegion({} as RiotRegion, Action);

export default class GetLorRankedLeaderboard extends BaseAction<LorLeaderboardDTO> {
    constructor(submodules: SubmoduleMap) {
        super(submodules);
        this.payload.endpoint = ENDPOINTS.LOR_RANKED.LEADERBOARDS;
        this.payload.type = 'riot';
        this.payload.method = 'GET';
    }
}
