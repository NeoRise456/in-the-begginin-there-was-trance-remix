setCpm(136/4)
register('acidenv', (x,pat) => pat.lpf(100)
         .lpenv(x * 9).lps(2).lpd(.12)
        )


//first time algo ravin? - props to swtich angel
//.add("<7 _ _ 6 5 _ _ 6>*2")
$: n("<0 4 0 9 7>*16".add("<7 _ _ 6 5 _ _ 6>*2")).scale("g:minor").trans(-12)
.o(3).s("sawtooth").acidenv(slider(0.285))
  .delay(0.4)
  ._pianoroll()
$: n("<0 4 0 9 7>*16".add("<7 9 14 16 5 9 12 6 7 9 14 16 19 12 9 14>*2")).scale("g:minor").trans(-12)
.o(2).s("sawtooth").acidenv(slider(0.799))
  .detune(100)
  .delay(0.4)
  ._pianoroll()


$: n("<7 _ _ 6 5 _ <5 3> <6 4>>*2").scale("g:minor").trans(-24)
  .detune(rand)
.o(8).s("supersaw").acidenv(slider(1))
  ._pianoroll()
$: s("r88_hh:4!16").fit().o(5)
$:  s("tr505_bd:2!4")
    .duck("3:4:5:6")
    .duckdepth(.8)
    .duckattack(.16)
    ._scope()

_$: s("white!4").att(.4).o(6)

_$: s("bossdr550_cp:9!4").o(4)




