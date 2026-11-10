import { LitElement } from 'lit';
export declare class AmLyrics extends LitElement {
    static styles: import("lit").CSSResult;
    query?: string;
    musicId?: string;
    spotifyId?: string;
    isrc?: string;
    ttml?: string;
    songTitle?: string;
    private downloadFormat;
    songArtist?: string;
    songAlbum?: string;
    songwriters?: string;
    songDurationMs?: number;
    highlightColor: string;
    fontFamily: string | undefined;
    autoScroll: boolean;
    interpolate: boolean;
    /** Freeze the playback clock and timed effects while the player is paused. */
    paused: boolean;
    /** Use supplied alternates only; disable Google generation, including button actions. */
    noAutoAlternates: boolean;
    /** Disable distance and predictive blur without changing lyric timing. */
    noBlur: boolean;
    hidePlayedLines: boolean;
    /** Also enabled automatically by the system reduced-motion preference. */
    reducedMotion: boolean;
    /** Browser implementations; these are not the native app's version IDs. */
    lineMotion: 'staggered' | 'uniform' | 'instant';
    private systemReducedMotion;
    private motionPreference?;
    private get shouldReduceMotion();
    private readonly handleMotionPreference;
    private showRomanization;
    private showTranslation;
    private toggleRomanization;
    private applyRomanization;
    private toggleTranslation;
    private applyTranslation;
    duration?: number;
    private _currentTime;
    private playbackAnchor;
    private playbackStamp;
    private lastHostTime?;
    private lastAdvanceStamp;
    private hostCadence;
    private clockAdvancing;
    private playbackTimer?;
    private playbackEvents;
    private playbackEventIndex;
    private heldPlaybackAnimations;
    private playbackEventAt;
    private get playbackHorizon();
    private estimatedPlaybackTime;
    private cancelPlaybackTick;
    private schedulePlaybackTick;
    private holdPlaybackAnimations;
    private releasePlaybackAnimations;
    private readonly handlePlaybackVisibility;
    private rewindingLines;
    private rewindFrame;
    private rewindEffects;
    private finishLineRewind;
    private startLineRewind;
    set currentTime(value: number);
    get currentTime(): number;
    private applyPlaybackTime;
    private isLoading;
    private lyrics?;
    private activeLineIndices;
    private timingLyrics?;
    private lineHighlightEnds;
    private activeTimelineInterval?;
    private backgroundWraps;
    private ensureTimingCache;
    private getBackgroundWrap;
    private lyricsSource;
    private availableSources;
    private currentSourceIndex;
    private isFetchingAlternatives;
    private sourceSwitchPending;
    private selectedSourceKey;
    private hasFetchedAllProviders;
    private hasFetchedSpicyLyrics;
    private _updateFooter;
    private lyricsContainer?;
    private lastInstrumentalIndex;
    private userScrollTimeoutId?;
    private isUserScrolling;
    private isProgrammaticScroll;
    private isClickSeeking;
    private clickSeekTimeout?;
    private cachedLyricsLines;
    private cachedLineArray;
    private lineElementCache;
    private gapElementCache;
    private gapAnimations;
    private gapDotCache;
    private gapExitDurationCache;
    private gapCollapseDurationCache;
    private footerElement?;
    private cachedAllGaps;
    private gapsCached;
    private cachedIsUnsynced;
    private cachedLineData;
    private backgroundTailIndices;
    private activeLineIds;
    private currentPrimaryActiveLine;
    private lastPrimaryActiveLine;
    private backgroundExpandedLines;
    private backgroundAnimations;
    private pendingRenderLayout?;
    private contentSprings;
    private currentScrollOffset;
    private fetchAbortController?;
    private lastActiveIndex;
    private visibleLineIds;
    private visibilityObserver?;
    private preActiveLineElements;
    private progressiveBlurLine;
    private progressiveBlurAnimation?;
    private positionedLineElements;
    private activeGapLineElements;
    private _boundHandleUserScroll;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private fetchLyrics;
    private publishAvailableSources;
    private sourceUpgrade;
    private onLyricsLoaded;
    private autoProcessLyrics;
    private static hasWordSyncedLyrics;
    private static getTimingRank;
    private static getRankForCollected;
    private static compareSources;
    private static getDisplaySourceLabel;
    private static getSourceKey;
    private static mergeAndSortSources;
    private findCurrentSourceIndex;
    private static getNextSourceIndex;
    private applySourceAtIndex;
    private switchSource;
    private discoverAlternativeSources;
    private resolveSongMetadata;
    private static spotifyToken?;
    private static spotifyTokenRequest?;
    private static lookupSpotifyIdByIsrc;
    private static getSpotifyToken;
    private fetchLyricsFromSpicyLyrics;
    private static parseQueryMetadata;
    private static searchLyricsPlusCatalog;
    private static fetchLyricsFromLrcRed;
    private static parseLrcRedJson;
    private static fetchLyricsFromBiniLyrics;
    private static fetchLyricsFromYouLyPlus;
    /**
     * Parse LRC subtitle format into LyricsLine[].
     * Handles "[mm:ss.xx] text" lines.
     */
    private static parseLrcSubtitles;
    /**
     * Fetch lyrics from LRCLIB.
     * Uses search endpoint, prefers synced lyrics.
     */
    private static fetchLyricsFromLrclib;
    private static fetchLyricsFromGenius;
    private static fetchLyricsFromUnison;
    private static calculateLineAlignments;
    private static parseTTMLTime;
    private static isRightToLeftLanguage;
    private static parseTTML;
    private static convertKPoeLyrics;
    private static toMilliseconds;
    firstUpdated(): void;
    /**
     * Handle currentTime changes imperatively, bypassing Lit's render cycle.
     * This prevents the template from re-rendering on every frame, which would
     * reset imperative animation classes (highlight, finished, etc.) set by
     * updateSyllablesForLine.
     */
    private _onTimeChanged;
    private updatePlayedLines;
    protected willUpdate(changedProperties: Map<string | number | symbol, unknown>): void;
    updated(changedProperties: Map<string | number | symbol, unknown>): void;
    /**
     * Handle scrolling when active line indices change.
     * Called imperatively from _onTimeChanged instead of from updated().
     *
     * Uses predictive scroll like YouLyPlus: computes a scrollLookAheadMs based
     * on the gap to the next line, finds the primary line at predictiveTime,
     * and scrolls with a duration matching the lookahead.
     */
    private _handleActiveLineScroll;
    private _rebuildDomCache;
    private _getLineElement;
    private _getGapElement;
    private clearGapAnimations;
    private _invalidateCaches;
    private _updateCachedIsUnsynced;
    private static characterMotionMode;
    private static overlapSegmenter;
    private static getOverlapWordEnds;
    private _ensureLineDataCache;
    private _updateCharTimingData;
    private static arraysEqual;
    private static isOppositeAgent;
    private static isLineSyncedLine;
    private getLineHighlightEndTime;
    private computeLineHighlightEndTime;
    private static getLineIndexFromElement;
    private static easeOutExpo;
    private static getCssTimeMs;
    private updateInstrumentalGap;
    private clearProgressiveBlurLine;
    private pendingLayoutOffsets;
    private captureLyricLayout;
    private finishLyricLayout;
    private setBackgroundExpandedLine;
    private clearBackgroundExpandedLine;
    private backgroundCarries;
    private restoreCarriesAfterRender;
    private backgroundCarryRestoreTops;
    private backgroundCarryRestoreOwners;
    private lastCarryTime;
    private static getBackgroundCarryTop;
    private animateBackgroundCarries;
    private static invalidateVocalCache;
    private removeBackgroundCarry;
    private clearBackgroundCarries;
    private syncBackgroundCarries;
    private getPrimaryActiveLineIndex;
    private getPrimaryScrollLineIndex;
    private focusLine;
    private setUserScrolling;
    private handleUserScroll;
    private clearPastLineHighlights;
    /**
     * Find the first (lowest-index) line whose raw time range contains `timeMs`.
     * Uses a stable forward scan so overlapping ranges always return the same
     * line, preventing primary-target jitter that causes scroll glitches.
     */
    private getLineIndexAtTime;
    private findActiveLineIndices;
    private findInstrumentalGapAt;
    /**
     * Find ALL instrumental gaps in the song, regardless of current time.
     * Used by the template to always render gap elements in the DOM.
     */
    private findAllInstrumentalGaps;
    private handleLineClick;
    private static getBackgroundTextPlacement;
    private scrollToActiveLine;
    private scrollToInstrumental;
    /**
     * Get the scroll padding top value from CSS variable
     */
    private getScrollPaddingTop;
    private cancelLineScrollAnimation;
    private lineSprings;
    private static sampleSpring;
    private static createLineSpringFrames;
    private static lineSpringSamples;
    private getLayoutScrollHeight;
    private animateScrollYouLy;
    /**
     * Update position classes for YouLyPlus-style opacity/blur gradients
     */
    private updatePositionClasses;
    /**
     * Scroll to active line with YouLyPlus-style animation
     */
    private scrollToActiveLineYouLy;
    /**
     * Update syllable highlight animation - apply CSS wipe animation
     */
    private static clamp;
    private static getVisibleCharacterCount;
    private static getLongWordWipeScale;
    private static applyWipeShape;
    private static ensureWordWipeGeometry;
    private static clearPreHighlight;
    private static clearPreWipeLead;
    private static hasTextBoundaryAfter;
    private static getSyllableWordIndex;
    private static getNextWordSyllable;
    private static getPreviousNonTransliterationSyllable;
    private static getVocalTrack;
    private static getRenderedWordSyllables;
    private static wordWipes;
    private static wipeClocks;
    private static getWordWipe;
    private static startWordWipe;
    private static clearWordWipe;
    private static getWordElementForSyllable;
    private static getWordPreWipeKey;
    private static isPreWipeArmed;
    private static applyWordPreWipe;
    private static getWordPreWipeDuration;
    private static maybePreWipeNextWord;
    private static getCachedCharSpans;
    private static getCachedVirtualWordElements;
    private static getCachedVirtualWordCharSpans;
    private static updateSyllableAnimation;
    /**
     * Reset syllable animation state
     */
    private static resetSyllable;
    private static resetWordAnimationState;
    /**
     * Reset all syllables in a line — batches deferred cleanup into a single rAF
     */
    private static resetSyllables;
    /**
     * Retire colour and glow while existing character transforms finish.
     */
    private static unfinishSyllables;
    /**
     * Update syllables based on current time
     * Uses DOM caching and pre-highlight reset for smooth transitions
     */
    private static motionWords;
    private static normalWordMotions;
    private static normalRiseClocks;
    private static normalWordFrames?;
    private static clearNormalWordMotion;
    private static startNormalWordMotion;
    private static updateNormalWordMotion;
    private static motionSyllables;
    private static motionParameters;
    private static characterFrames;
    private static characterAnimations;
    private static clearCharacterMotion;
    private static setCharacterGlow;
    private static resumeCharacterMotion;
    private static updateCharacterMotion;
    private static springProgress;
    private static seekLineWipes;
    private static updateSyllablesForLine;
    private generateLRC;
    private generatePlain;
    private generateTTML;
    private static formatTimestampLRC;
    private static formatTimestampTTML;
    private downloadLyrics;
    private renderSourceDetails;
    private renderContributors;
    private static renderTimedRomanization;
    render(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=AmLyrics.d.ts.map