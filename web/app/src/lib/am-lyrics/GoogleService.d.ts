interface RomanizableLine {
    text?: {
        text: string;
        romanizedText?: string;
    }[] | string;
    romanizedText?: string;
    isWordSynced?: boolean;
}
/**
 * Service for translating and romanizing text using Google Translate (unofficial API)
 */
export declare class GoogleService {
    private static delay;
    private static fetchWithTimeout;
    private static isPurelyLatinScript;
    static translate(textOrArray: string | string[], targetLang: string): Promise<string | string[]>;
    static romanize<T extends RomanizableLine>(originalLyrics: T[] | {
        data?: T[];
        content?: T[];
    }): Promise<T[]>;
    static romanizeWordSynced<T extends RomanizableLine>(lines: T[]): Promise<T[]>;
    static romanizeLineSynced<T extends RomanizableLine>(lines: T[]): Promise<T[]>;
    static romanizeTexts(texts: string[]): Promise<string[]>;
}
export {};
//# sourceMappingURL=GoogleService.d.ts.map