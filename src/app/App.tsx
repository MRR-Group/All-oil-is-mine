import { DiscordContextProvider } from '../hooks/useDiscordSdk'
import { Activity } from './Activity'
import './App.css'
import {LoadingScreen} from "../components/LoadingScreen";
import {GameContextProvider, PlayersContextProvider} from "../hooks/usePlayers";

/**
 * Set `authenticate` to true to enable Discord authentication.
 * You can also set the `scope` prop to request additional permissions.
 *
 * ```
 * <DiscordContextProvider authenticate scope={['identify', 'guilds']}>
 *  <Activity />
 * </DiscordContextProvider>
 * ```
 *
 * Learn more:
 * https://robojs.dev/discord-activities/authentication
 */
export default function App() {
    return (
        <DiscordContextProvider
            authenticate
            loadingScreen={<LoadingScreen />}
            scope={['identify', 'guilds', 'guilds.members.read', 'rpc.voice.read']}
        >
            <GameContextProvider>
                <PlayersContextProvider>
                    <Activity />
                </PlayersContextProvider>
            </GameContextProvider>
        </DiscordContextProvider>
    )
}