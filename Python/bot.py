import discord
from discord.ext import commands

TOKEN = ''
client = commands.Bot(command_prefix='G')


@client.event
async def on_read():
    print('Bot logado')


@client.command(pass_context=True)
async def join(ctx):
    channel = ctx.message.author.voice.voice_channel
    await client.join_voice_channel(channel)


@client.command(pass_context=True)
async def leave(ctx):
    server = ctx.message.server
    voice_client = client.voice_client_in(server)
    await voice_client.disconnect()


# @client.command(pass_context=True)
# async def play(ctx, url):
#     server = ctx.message.server
#     voice_client = client.voice_client_in(server)


client.run(TOKEN)
