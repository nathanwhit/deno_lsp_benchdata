import type { PresenceOpts, PresenceOnJoinCallback, PresenceOnLeaveCallback } from 'https://esm.sh/v135/@types/phoenix@1.6.4/index.d.ts';
import type RealtimeChannel from './RealtimeChannel.d.ts';
declare type Presence<T extends {
    [key: string]: any;
} = {}> = {
    presence_ref: string;
} & T;
export declare type RealtimePresenceState<T extends {
    [key: string]: any;
} = {}> = {
    [key: string]: Presence<T>[];
};
export declare type RealtimePresenceJoinPayload<T extends {
    [key: string]: any;
}> = {
    event: `${REALTIME_PRESENCE_LISTEN_EVENTS.JOIN}`;
    key: string;
    currentPresences: Presence<T>[];
    newPresences: Presence<T>[];
};
export declare type RealtimePresenceLeavePayload<T extends {
    [key: string]: any;
}> = {
    event: `${REALTIME_PRESENCE_LISTEN_EVENTS.LEAVE}`;
    key: string;
    currentPresences: Presence<T>[];
    leftPresences: Presence<T>[];
};
export declare enum REALTIME_PRESENCE_LISTEN_EVENTS {
    SYNC = "sync",
    JOIN = "join",
    LEAVE = "leave"
}
declare type RawPresenceState = {
    [key: string]: {
        metas: {
            phx_ref?: string;
            phx_ref_prev?: string;
            [key: string]: any;
        }[];
    };
};
declare type RawPresenceDiff = {
    joins: RawPresenceState;
    leaves: RawPresenceState;
};
export default class RealtimePresence {
    channel: RealtimeChannel;
    state: RealtimePresenceState;
    pendingDiffs: RawPresenceDiff[];
    joinRef: string | null;
    caller: {
        onJoin: PresenceOnJoinCallback;
        onLeave: PresenceOnLeaveCallback;
        onSync: () => void;
    };
    /**
     * Initializes the Presence.
     *
     * @param channel - The RealtimeChannel
     * @param opts - The options,
     *        for example `{events: {state: 'state', diff: 'diff'}}`
     */
    constructor(channel: RealtimeChannel, opts?: PresenceOpts);
}
export {};
//# sourceMappingURL=RealtimePresence.d.ts.map
