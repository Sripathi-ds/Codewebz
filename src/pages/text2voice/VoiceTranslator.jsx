import { Box, Button, FormControl, InputLabel, MenuItem, Stack, TextField, Typography, Select } from '@mui/material'
import React, { useEffect, useState } from 'react'

const VoiceTranslator = () => {
    const [translateText, setTranslateText] = useState('')

    const [voiceList, setVoiceList] = useState(null)
    const [selectedVoice, setSelectedVoice] = useState(null)



    function speak() {
        // Create a SpeechSynthesisUtterance
        const utterance = new SpeechSynthesisUtterance(translateText);
        utterance.voice = selectedVoice;
        // Speak the text
        speechSynthesis.speak(utterance);
    }

    useEffect(() => {
        const utterance = new SpeechSynthesisUtterance(speechSynthesis.getVoices('hi'));
        setVoiceList(utterance)
    }, [])

    return (
        <>
            <Stack direction='row' sx={{ gap: 1, alignItems: 'center', mb: 2, justifyContent: 'space-between' }}>
                <Box>
                    <Typography>Voice Translator</Typography>
                </Box>
                {
                    voiceList?.length && <FormControl sx={{ minWidth: '300px' }}>
                        <InputLabel id="demo-simple-select-label">Voices</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={selectedVoice ? selectedVoice : ''}
                            label="Age"
                            size='small'
                            onChange={(e) => setSelectedVoice(e.target.value)}
                        >
                            {
                                voiceList.map((voice, index) => {
                                    return <MenuItem key={index} value={voice}>{voice.name}</MenuItem>
                                })
                            }
                        </Select>
                    </FormControl>
                }

            </Stack>
            <Box>
                <TextField
                    multiline
                    rows={3}
                    fullWidth
                    size='small'
                    value={translateText}
                    onChange={(e) => setTranslateText(e.target.value)}
                />
            </Box>
            <Button onClick={() => { speak() }}>Speak</Button>
        </>
    )
}

export default VoiceTranslator