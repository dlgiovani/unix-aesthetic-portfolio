const About = () => {

  return (
    <>
      <button className='flex items-center btn btn-ghost drop-shadow text-sm md:text-base' onClick={() => document.getElementById('about_modal').showModal()}>
        <span>Sobre</span>
        <span className="material-symbols-outlined text-sm md:text-lg">lightbulb</span>
      </button>

      <dialog id="about_modal" className="modal">
        <div className="modal-box text-left text-pretty">
          <div className="flex gap-2 items-end">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="rounded-full w-4 h-4 bg-error mb-6 left-2 top-2"></button>
            </form>
            <button className="rounded-full w-4 h-4 bg-neutral mb-6 left-2 top-2"></button>
            <button className="rounded-full w-4 h-4 bg-neutral mb-6 left-2 top-2"></button>
          </div>
          <h3 className="font-bold text-lg">Olá, eu sou o Giovani</h3>
          <p className="py-4">Sou um programador fullstack com quase uma década de experiência em programação e ~3 anos em desenvolvimento profissional de software.</p>
          <p className="py-4">Venho me especializando no momento em APIs REST e Oauth2. Crio webapps completos do zero com FastAPI e React (às vezes Node), com grande foco na experiência do usuário.</p>
          <p className="py-4 code text-xs">i use arch btw</p>
          <p className="py-4 font-thin">Pressione ESC ou clique fora para sair...</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  )
}

export default About;