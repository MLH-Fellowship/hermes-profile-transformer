export enum EventsPhase {
  DURATION_EVENTS_BEGIN = 'B',
  DURATION_EVENTS_END = 'E',
  COMPLETE_EVENTS = 'X',
  INSTANT_EVENTS = 'I',
  COUNTER_EVENTS = 'C',
  ASYNC_EVENTS_NESTABLE_START = 'b',
  ASYNC_EVENTS_NESTABLE_INSTANT = 'n',
  ASYNC_EVENTS_NESTABLE_END = 'e',
  FLOW_EVENTS_START = 's',
  FLOW_EVENTS_STEP = 't',
  FLOW_EVENTS_END = 'f',
  SAMPLE_EVENTS = 'P',
  OBJECT_EVENTS_CREATED = 'N',
  OBJECT_EVENTS_SNAPSHOT = 'O',
  OBJECT_EVENTS_DESTROYED = 'D',
  METADATA_EVENTS = 'M',
  MEMORY_DUMP_EVENTS_GLOBAL = 'V',
  MEMORY_DUMP_EVENTS_PROCESS = 'v',
  MARK_EVENTS = 'R',
  CLOCK_SYNC_EVENTS = 'c',
  CONTEXT_EVENTS_ENTER = '(',
  CONTEXT_EVENTS_LEAVE = ')',
  // Deprecated
  ASYNC_EVENTS_START = 'S',
  ASYNC_EVENTS_STEP_INTO = 'T',
  ASYNC_EVENTS_STEP_PAST = 'p',
  ASYNC_EVENTS_END = 'F',
}