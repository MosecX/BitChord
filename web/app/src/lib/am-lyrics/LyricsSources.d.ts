export interface Syllable {
    text: string;
    part: boolean;
    timestamp: number;
    endtime: number;
    romanizedText?: string;
    lineSynced?: boolean;
}
export interface LyricsLine {
    text: Syllable[];
    background: boolean;
    backgroundText: Syllable[];
    oppositeTurn: boolean;
    timestamp: number;
    endtime: number;
    isWordSynced?: boolean;
    alignment?: 'start' | 'end';
    songPart?: string;
    romanizedText?: string;
    translation?: string;
    agentId?: string;
    direction?: 'ltr' | 'rtl';
}
export interface LyricsContributor {
    username: string;
    url?: string;
    avatar?: string;
    roles: string[];
}
export interface LyricsSourceResult {
    originalTTML?: string;
    lines: LyricsLine[];
    source: string;
    songwriters?: string;
    byModel?: boolean;
    isrc?: string;
    metadata?: {
        title: string;
        artist: string;
        album?: string;
        durationMs?: number;
    };
    contributors?: LyricsContributor[];
    confidence?: string;
    matchScore?: number;
    matchedBy?: string;
}
export declare function secondsToMs(value: unknown, fallback?: number): number;
export declare function parseSpicyLyrics(payload: any): LyricsSourceResult | null;
//# sourceMappingURL=LyricsSources.d.ts.map